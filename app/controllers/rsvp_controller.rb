class RsvpController < ApplicationController
  skip_before_action :verify_authenticity_token

  include ApplicationHelper

  def index
    @no_guest
  end

  def show
    first_name = params.fetch('first').downcase
    last_name  = params.fetch('last').downcase
    guest = Guest.where(first_name: first_name, last_name: last_name)

    @no_guest = false

    if guest.empty?
      @no_guest = true
      render "index"
    else
      session[:guest_id] = guest.first.id
      guests = get_guests_for_family(guest)
      @guest_data = hydrate_guest_data(guests)
      @current_guest = current_user
    end
  end

  def update
    rsvp_hash = params.clone
    rsvp_hash.delete('controller') && 
    rsvp_hash.delete('action') && 

    rsvps_to_update = rsvp_hash.keys

    guest_rsvp_id = rsvps_to_update.first
    one_rsvp = Rsvp.find(guest_rsvp_id)
    family_id = Guest.find(one_rsvp.guest_id).family_id
    family = Family.find(family_id)

    if message != ("" || nil)
      family.message = message
      family.save!
    end

    rsvps_to_update.each do |rsvp_id|
      rsvp = Rsvp.find(rsvp_id)
      rsvp.status = rsvp_hash[rsvp_id]
      rsvp.save!
    end
  end

  private

  def hydrate_guest_data(guests)
    guests.map do |guest|
      {
        "id" => guest.id,
        "full_name" => "#{guest.first_name.capitalize} #{guest.last_name.capitalize}",
        "first_name" => guest.first_name,
        "last_name" => guest.last_name,
        "rsvp" => guest.rsvp
      }
    end
  end

  def get_guests_for_family(guest)
    family = Family.includes(:guests).find(guest.first.family_id)
    family.guests
  end
end

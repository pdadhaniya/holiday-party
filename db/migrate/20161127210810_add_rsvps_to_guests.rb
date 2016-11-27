class AddRsvpsToGuests < ActiveRecord::Migration
  def change
    add_column :guests, :rsvp, :string
  end
end

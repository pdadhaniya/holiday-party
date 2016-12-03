module ApplicationHelper

  def countdown
    ((Time.new(2016,12,23,6) - Time.now)/60/60/24).to_f.ceil
  end

  def current_user
    @guest ||= Guest.find(session[:guest_id])
  end

end

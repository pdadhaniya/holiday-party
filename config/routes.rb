Rails.application.routes.draw do
  get '/rsvp' => 'rsvp#index'

  get '/rsvp/user' => 'rsvp#show'

  post '/rsvp/update' => 'rsvp#update'

  get '/welcome' => 'welcome#index'

  get '/details' => 'details#index'

  root 'welcome#index'
end

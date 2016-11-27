Rails.application.routes.draw do
  get '/social' => 'social#index'

  get '/gallery' => 'gallery#index'

  get '/contact' => 'contact#index'

  get '/accommodations' => 'accomodations#index'

  get '/events' => 'events#index'

  get '/events/search'

  get '/rsvp' => 'rsvp#index'

  get '/rsvp/user' => 'rsvp#show'

  post '/rsvp/update' => 'rsvp#update'

  get '/weddingparty' => 'weddingparty#index'

  get '/welcome' => 'welcome#index'

  get '/details' => 'details#index'

  root 'welcome#index'

end

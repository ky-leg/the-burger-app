Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # get '/usersrestaurants/:id', to: 'restaurants#show_restaurants'
  # get '/proejcts/:id', to: ''

  # resources :rfis
  resources :restaurants, only: [:index, :create, :show, :destroy]
  resources :dishes, only: [:index, :create, :show, :destroy]
  resources :ratings, only: [:index, :create, :show]
  resources :users, only: [:index, :show]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :devices
    resources :credentials
  end

  get '/api/devices/search', to: 'api/devices#search'
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

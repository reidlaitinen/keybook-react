Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  get '/api/devices/search', to: 'api/devices#search'
  
  namespace :api do
    resources :devices
    resources :credentials
  end

  
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

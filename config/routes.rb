Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :devices do
      resources :search
    resources :credentials
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

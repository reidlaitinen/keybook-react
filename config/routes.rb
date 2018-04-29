Rails.application.routes.draw do
  namespace :api do
    get 'credentials/create'
  end

  namespace :api do
    get 'credentials/index'
  end

  namespace :api do
    get 'credentials/update'
  end

  namespace :api do
    get 'credentials/delete'
  end

  namespace :api do
    get 'credentials/show'
  end

  namespace :api do
    get 'devices/create'
  end

  namespace :api do
    get 'devices/index'
  end

  namespace :api do
    get 'devices/update'
  end

  namespace :api do
    get 'devices/delete'
  end

  namespace :api do
    get 'devices/show'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

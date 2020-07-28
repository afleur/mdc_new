Rails.application.routes.draw do

  root to: 'pages#home'
  get 'manifesto', to: 'pages#manifesto'
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'

  devise_for :users


  resources :subscribers
  get 'subscribers/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

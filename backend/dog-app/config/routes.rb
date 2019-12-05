Rails.application.routes.draw do
  resources :comments, only: [:create, :destroy]
  resources :breeds, only: [:index, :show, :create, :update]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

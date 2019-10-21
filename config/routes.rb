Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope '/api/v1' do
    resources :cards
  end
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end

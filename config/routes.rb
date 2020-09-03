Rails.application.routes.draw do
  root to: 'home#index'
  post 'accounts/deposit', to: 'accounts#deposit'
  post 'accounts/withdraw', to: 'accounts#withdraw'
  post 'accounts/balance', to: 'accounts#check_balance'
  post 'accounts/view_transactions', to: 'accounts#view_transactions'
  get '*path', to: 'home#index'
end

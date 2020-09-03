class Account < ActiveRecord::Base
  has_many :transactions
  has_many :user_accounts
end
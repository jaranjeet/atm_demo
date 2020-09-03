class User < ApplicationRecord
  has_many :user_accounts
  has_many :accounts, through: :user_accounts
end

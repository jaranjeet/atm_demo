class Transaction < ActiveRecord::Base
  belongs_to :account
  enum transaction_type: { credit: 0, debit: 1 }
end
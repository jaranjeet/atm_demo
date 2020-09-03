class CreateTransactions < ActiveRecord::Migration[6.0]
  def self.up
    create_table :transactions do |t|
      t.timestamps
      t.float :amount
      t.integer :transaction_type
      t.references :account
    end
  end

  def self.down
    drop_table :transactions
  end
end
class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
    end
  end
end

class CreateAccounts < ActiveRecord::Migration[6.0]
  def self.up
    create_table :accounts do |t|
      t.float :balance, null: false, default: 0.0

      t.timestamps
    end
  end

  def self.down
    drop_table :accounts
  end
end

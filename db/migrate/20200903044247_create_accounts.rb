class CreateAccounts < ActiveRecord::Migration[6.0]
  def self.up
    create_table :accounts do |t|
      t.float :balance, null: false, default: 0.0
      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :accounts
  end
end
class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
    end
  end
end

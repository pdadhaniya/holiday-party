class AddFamilies < ActiveRecord::Migration
  def change
    create_table :families do |t|
      t.string :family_name, null: false

      t.timestamps null: false
    end
  end
end

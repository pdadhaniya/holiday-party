class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :event_name, null: false

      t.timestamps null: false
    end
  end
end
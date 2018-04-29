class CreateDevices < ActiveRecord::Migration[5.1]
  def change
    create_table :devices do |t|
      t.string :ip_address
      t.string :location
      t.string :tags
      t.text :description
      t.string :category
      t.date :deployed_date

      t.timestamps
    end
  end
end

class AddNameToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :name, :string
  end
end

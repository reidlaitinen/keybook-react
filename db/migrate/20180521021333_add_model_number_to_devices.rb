class AddModelNumberToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :model_number, :string
  end
end

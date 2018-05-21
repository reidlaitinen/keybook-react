class AddMfgToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :mfg, :string
  end
end

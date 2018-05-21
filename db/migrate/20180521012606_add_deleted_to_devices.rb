class AddDeletedToDevices < ActiveRecord::Migration[5.1]
  def change
    add_column :devices, :deleted, :boolean
  end
end

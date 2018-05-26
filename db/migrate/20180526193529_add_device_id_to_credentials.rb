class AddDeviceIdToCredentials < ActiveRecord::Migration[5.1]
  def change
    add_column :credentials, :device_id, :integer
  end
end

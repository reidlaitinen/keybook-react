class AddPrimaryToCredentials < ActiveRecord::Migration[5.1]
  def change
    add_column :credentials, :primary, :boolean
  end
end

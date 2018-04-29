class CreateCredentials < ActiveRecord::Migration[5.1]
  def change
    create_table :credentials do |t|
      t.string :category
      t.string :url
      t.string :username
      t.string :password
      t.string :notes

      t.timestamps
    end
  end
end

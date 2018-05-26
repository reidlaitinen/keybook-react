class ChangeNotesFormatInCredentials < ActiveRecord::Migration[5.1]
  def change
    change_column :credentials, :notes, :text
  end
end

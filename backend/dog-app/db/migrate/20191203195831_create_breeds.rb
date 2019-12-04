class CreateBreeds < ActiveRecord::Migration[6.0]
  def change
    create_table :breeds do |t|
      t.string :breed
      t.text :info 
      t.string :image_url 
      t.string :description 
      t.timestamps
    end
  end
end

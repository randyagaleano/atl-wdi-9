class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :content
      t.string :date_posted
      t.integer :article_id

      t.timestamps
    end
  end
end

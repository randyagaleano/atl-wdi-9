class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.string :author
      t.string :publication_date

      t.timestamps
    end
  end
end

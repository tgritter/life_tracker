class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :category
      t.date :date
      t.jsonb :data

      t.timestamps
    end
  end
end

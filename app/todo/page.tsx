'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '../../src/lib/supabaseClient';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const fetchTodos = async () => {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) {
      console.error('Error fetching todos:', error);
      alert('タスクの取得に失敗しました。');
    } else {
      setTodos(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!title || !description) {
      alert('タイトルと説明を入力してください');
      return;
    }

    const { error } = await supabase
      .from('tasks')
      .insert([{ title, description, completed: false }]);

    if (error) {
      console.error('Error adding todo:', error);
      alert('タスクの追加に失敗しました。');
    } else {
      setTitle('');
      setDescription('');
      fetchTodos(); // タスク追加後に再取得
    }
  };

  const updateTodo = async (id: number) => {
    if (!title || !description) {
      alert('タイトルと説明を入力してください');
      return;
    }

    const { error } = await supabase
      .from('tasks')
      .update({ title, description })
      .eq('id', id);

    if (error) {
      console.error('Error updating todo:', error);
      alert('タスクの更新に失敗しました。');
    } else {
      setTitle('');
      setDescription('');
      setEditingTodo(null);
      fetchTodos(); // 更新後に再取得
    }
  };

  const deleteTodo = async (id: number) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting todo:', error);
      alert('タスクの削除に失敗しました。');
    } else {
      fetchTodos(); // 削除後に再取得
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        ToDoリスト
      </h1>
      <div className="mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="説明"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <button
          onClick={editingTodo ? () => updateTodo(editingTodo.id) : addTodo}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {editingTodo ? '更新' : '追加'}
        </button>
      </div>
      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">読み込み中...</p>
      ) : todos.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">タスクがありません</p>
      ) : (
        <ul className="w-full max-w-md text-gray-900 dark:text-white">
          {todos.map((todo) => (
            <li key={todo.id} className="mb-2 flex items-center justify-between p-2 border rounded bg-white dark:bg-gray-800">
              <span
                className={`flex-1 ${todo.completed ? 'line-through' : ''}`}
                onClick={() => {
                  setEditingTodo(todo);
                  setTitle(todo.title);
                  setDescription(todo.description);
                }}
              >
                {todo.title}: {todo.description}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
        
      )}
    </main>
  );
} 
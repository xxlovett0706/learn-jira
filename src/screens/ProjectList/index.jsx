import React from 'react';
import { useState, useEffect } from 'react';
import * as qs from 'qs';
import { cleanObject } from '../../utils';
import { SearchPanel } from './SearchPanel';
import { List } from './List';

const apiUrl = import.meta.env.VITE_API;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

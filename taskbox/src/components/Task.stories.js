import { storiesOf } from '@storybook/vue';
import {action} from '@storybook/addon-actions';


import Task from './Task';

export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updateAt: new Date(2019, 11, 14, 9, 0)
};

export const methods = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
    .add('default', () =>{
        return {
            components: { Task },
            template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
            data: () => ({task}),
            methods,
        };
    })
    .add('pinned', () => {
        return {
          components: { Task },
          template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
          data: () => ({ task: { ...task, state: 'TASK_PINNED' } }),
          methods,
        };
      })
      .add('archived', () => {
        return {
          components: { Task },
          template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
          data: () => ({ task: { ...task, state: 'TASK_ARCHIVED' } }),
          methods,
        };
      });
import { useReducer } from 'react';

interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

interface UserProps {
  id: number;
  age: number;
  name: string;
}

interface StateProps {
  user?: UserProps;
  taskList: TaskProps[];
}

interface ReducerProps {
  deleteTask: (id: number) => void;
  changeState: (id: number) => void;
  createUser: (user: UserProps) => void;
  addTask: (task: Partial<TaskProps>) => void;
  getTaskList: () => TaskProps[];
  getUser: (id: number) => UserProps | undefined;
}

const DeleteTask = 'App/DeleteTask';
const AddTaskAction = 'App/AddTask';
const CreateUserAction = 'App/CreateUser';
const ChangeTaskState = 'App/ChangeTaskState';

const initialState: StateProps = {
  user: undefined,
  taskList: [{ id: 1, name: 'Learn React', completed: false }],
};

function reducer(state, { type, meta }) {
  switch (type) {
    case CreateUserAction:
      if (!state.user) {
        return {
          ...state,
          user: {
            ...meta.user,
            id: 1,
          },
        };
      }

      return state;

    case AddTaskAction:
      return {
        ...state,
        taskList: [...state.taskList, meta.task],
      };

    case ChangeTaskState:
      return {
        ...state,
        taskList: state.taskList.map(task =>
          task.id === meta.id ? { ...task, completed: !task.completed } : task
        ),
      };

    case DeleteTask:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== meta.id),
      };

    default:
      return state;
  }
}

export function useTaskReducer(): ReducerProps {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    addTask: (task: Partial<TaskProps>) => dispatch({ type: AddTaskAction, meta: { task } }),
    deleteTask: (id: number) => dispatch({ type: DeleteTask, meta: { id } }),
    changeState: (id: number) => dispatch({ type: ChangeTaskState, meta: { id } }),
    getTaskList: () => state.taskList,
  };
}

export function useUserReducer(): ReducerProps {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    getUser: (id: number) => state.user,
    createUser: (user: UserProps) => dispatch({ type: CreateUserAction, meta: { user } }),
  };
}
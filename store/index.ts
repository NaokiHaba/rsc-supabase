import { create } from 'zustand'

type EditedTask = {
  id: string
  title: string | null
}

type LoginUser = {
  id: string | undefined
  email: string | undefined
}

type State = {
  editedTask: EditedTask
  updateEditedTask: (task: EditedTask) => void
  resetEditedTask: () => void
  loginUser: LoginUser
  updateLoginUser: (user: LoginUser) => void
  resetLoginUser: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '' },
  updateEditedTask: (task) => {
    set(() => {
      return { editedTask: task }
    })
  },
  resetEditedTask: () => set(({ editedTask: { id: '', title: '' } })),
  loginUser: { id: '', email: '' },
  updateLoginUser: (user) => set(({ loginUser: user })),
  resetLoginUser: () => set(({ loginUser: { id: '', email: '' } }))
}))
export default useStore
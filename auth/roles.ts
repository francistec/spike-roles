import { Actions } from './actions'
export const Roles = [
    {
        name: "Admin",
        description: "The person who can do everything",
        actions: [
            Actions.Edit,
            Actions.Publish,
            Actions.Unpublish,
            Actions.Read,
            Actions.Write
        ]
    },
    {
        name: "Editor",
        description: "The person who manage the notes",
        actions: [
            Actions.Edit,
            Actions.Publish,
            Actions.Unpublish,
            Actions.Read
        ]
    },
    {
        name: "Writer",
        description: "The person who creates articles",
        actions: [
            Actions.Edit,
            Actions.Write,
            Actions.Read
        ]
    },
    {
        name: "Intern",
        description: "The person who help a writer",
        actions: [
            Actions.Edit,
            Actions.Read
        ]
    },
]
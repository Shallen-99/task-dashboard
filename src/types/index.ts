export interface task {
    id: string;
    title: string;
    description: string;
    status: "pending" | "in-progress" | "completed";
    dueDate?: string;
}

export interface TaskFormData {
    title: string;
    description?: string;
    status: "pending" | "in-progress" | "completed";
    priority: "low" | "medium" | "high";
    searchQuery?: string;
}

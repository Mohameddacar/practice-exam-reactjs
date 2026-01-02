import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample Data
const initialUsers = [
  // ... (add more sample users for pagination demo)
  {
    id: 1,
    username: "freeman.dicki",
    name: "Freeman Dicki",
    email: "freeman83@gmail.com",
    phone: "+16972759140",
    status: "Invited",
    role: "Cashier",
  },
  {
    id: 2,
    username: "nick.bashirian-lowe",
    name: "Nick Bashirian-Lowe",
    email: "nick_donnelly@gmail.com",
    phone: "+17425632370",
    status: "Active",
    role: "Admin",
  },
  // Demo: generate more users for pagination
  ...Array.from({ length: 18 }, (_, i) => ({
    id: i + 3,
    username: `user${i + 3}`,
    name: `User ${i + 3}`,
    email: `user${i + 3}@mail.com`,
    phone: `+12345678${i + 3}`,
    status: ["Active", "Invited", "Inactive", "Suspended"][i % 4],
    role: ["Manager", "Cashier", "Admin", "Support"][i % 4],
  })),
];

const statusClasses = {
  Invited: "bg-blue-100 text-blue-800",
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-200 text-gray-700",
  Suspended: "bg-red-100 text-red-800",
};

const PAGE_SIZE = 5; // Show 5 users per page

export default function ViewUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // For add/edit form
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    status: "Active",
    role: "",
  });

  // Pagination state
  const [page, setPage] = useState(1);

  // Filter/search
  const filtered = useMemo(() => {
    return search.trim().length > 0
      ? users.filter(
          (u) =>
            u.username.toLowerCase().includes(search.toLowerCase()) ||
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
        )
      : users;
  }, [search, users]);

  // Pagination logic
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Handle add/edit
  const handleEdit = (user) => {
    setEditUser(user);
    setForm({ ...user });
    setModalOpen(true);
  };
  const handleAdd = () => {
    setEditUser(null);
    setForm({
      username: "",
      name: "",
      email: "",
      phone: "",
      status: "Active",
      role: "",
    });
    setModalOpen(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (editUser) {
      setUsers(
        users.map((u) => (u.id === editUser.id ? { ...form, id: editUser.id } : u))
      );
    } else {
      setUsers([
        ...users,
        { ...form, id: Math.max(0, ...users.map((u) => u.id)) + 1 },
      ]);
    }
    setModalOpen(false);
  };

  // Handle delete
  const handleDelete = () => {
    setUsers(users.filter((u) => u.id !== userToDelete.id));
    setShowDelete(false);
    setUserToDelete(null);
  };

  // Handle page change
  const goToPage = (p) => {
    if (p < 1 || p > pageCount) return;
    setPage(p);
  };

  // Reset to first page if search or filter changes
  React.useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className="mx-auto w-full mt-8 p-4">
      {/* Header + Add User */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User List</h1>
          <div className="text-gray-400">Manage your users and their roles here.</div>
        </div>
        <Button onClick={handleAdd}>+ Add User</Button>
      </div>

      {/* Search */}
      <div className="mb-4 flex items-center gap-2">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* User Table */}
      <Table>
        <TableCaption>A list of your users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-500">
                No users found.
              </TableCell>
            </TableRow>
          )}
          {paginated.map((u) => (
            <TableRow key={u.id}>
              <TableCell className="font-medium">{u.username}</TableCell>
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-bold ${statusClasses[u.status]}`}
                >
                  {u.status}
                </span>
              </TableCell>
              <TableCell>{u.role}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => handleEdit(u)}
                >
                  Update
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    setUserToDelete(u);
                    setShowDelete(true);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>
              <div className="flex justify-between items-center">
                <span>Total Users: {filtered.length}</span>
                {pageCount > 1 && (
                  <div className="flex gap-2 items-center">
                    <Button size="sm" variant="outline" onClick={() => goToPage(page - 1)} disabled={page === 1}>
                      Previous
                    </Button>
                    <span className="font-medium">
                      Page {page} of {pageCount}
                    </span>
                    <Button size="sm" variant="outline" onClick={() => goToPage(page + 1)} disabled={page === pageCount}>
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Add/Edit User Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editUser ? "Update User" : "Add User"}</DialogTitle>
            <DialogDescription>
              {editUser
                ? "Modify user details and click Update"
                : "Fill in details and click Add"}
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSave}
            className="flex flex-col gap-3"
            id="user-form"
          >
            <div className="flex gap-2">
              <Label className="w-1/3 text-right">Username</Label>
              <Input
                value={form.username}
                onChange={(e) =>
                  setForm((f) => ({ ...f, username: e.target.value }))
                }
                required
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Label className="w-1/3 text-right">Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Label className="w-1/3 text-right">Email</Label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Label className="w-1/3 text-right">Phone</Label>
              <Input
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Label className="w-1/3 text-right">Status</Label>
              <select
                className="border px-2 py-1 rounded flex-1"
                value={form.status}
                onChange={(e) =>
                  setForm((f) => ({ ...f, status: e.target.value }))
                }
              >
                <option value="Active">Active</option>
                <option value="Invited">Invited</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Label className="w-1/3 text-right">Role</Label>
              <Input
                value={form.role}
                onChange={(e) =>
                  setForm((f) => ({ ...f, role: e.target.value }))
                }
                className="flex-1"
              />
            </div>
          </form>
          <DialogFooter>
            <Button form="user-form" type="submit">
              {editUser ? "Update" : "Add"}
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={showDelete} onOpenChange={setShowDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong>{userToDelete?.name}</strong>?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
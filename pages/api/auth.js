import { users } from "../../utils/db";
import { hashPassword, verifyPassword } from "../../utils/auth";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { action, username, password } = req.body;
    
    if(action === "register") {
      if(users.find(u => u.username === username)) {
        return res.status(400).json({ message: "User exists" });
      }
      const hashed = hashPassword(password);
      users.push({ username, password: hashed });
      return res.status(200).json({ message: "Registered" });
    }

    if(action === "login") {
      const user = users.find(u => u.username === username);
      if(!user) return res.status(400).json({ message: "User not found" });
      if(!verifyPassword(password, user.password)) return res.status(400).json({ message: "Wrong password" });
      return res.status(200).json({ message: "Logged in" });
    }
  }
}

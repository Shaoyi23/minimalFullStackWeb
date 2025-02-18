// pages/about.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("your_table").select("*");
      if (error) console.error(error);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Spinner } from 'src/ui/spinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Posts by ID',
    },
  },
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type ChartDataType = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
  }[];
};

export function LineChart() {
  const [data, setData] = useState<ChartDataType>({
    labels: [],
    datasets: [
      {
        label: 'Post ID',
        data: [],
        borderColor: 'blue',
      },
    ],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await res.json();

        const labels = posts.map((post) => `Post ${post.id}`);
        const dataId = posts.map((post) => post.id);
        const dataUserId = posts.map((post) => post.userId);

        setData({
          labels,
          datasets: [
            {
              label: 'Post ID',
              data: dataId,
              borderColor: 'blue',
            },
            {
              label: 'Post UserID',
              data: dataUserId,
              borderColor: 'red',
            },
          ],
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {error && <h1>Error</h1>}
      {!loading && !error && <Line options={options} data={data} />}
    </>
  );
}

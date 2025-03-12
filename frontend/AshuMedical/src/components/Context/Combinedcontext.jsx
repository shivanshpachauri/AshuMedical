import { SortingProvider } from ".././Context/sortingcontext.jsx";
import { DeleteProvider } from ".././Context/deletecontext.jsx";
import { EditingProvider } from ".././Context/Editingcontext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "../store/index.js";
import { Provider } from "react-redux";
export default function CombinedContext({ children }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <EditingProvider>
          <DeleteProvider>
            <SortingProvider>{children}</SortingProvider>
          </DeleteProvider>
        </EditingProvider>
      </QueryClientProvider>
    </Provider>
  );
}

import React, {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Dispatch } from "react";

type SizeProps = {
  width: number | string | undefined;
  height: number | string | undefined;
};

type CardProps = SizeProps & {
  number?: number;
  title?: string;
  imgUrl?: string;
  tags: Array<string>;
};

type ChipProps = {
  number: number;
  backgroundColor?: string;
  isSelected?: boolean;
  label: string;
  isReadonly?: boolean;
};

export type { SizeProps, ChipProps, CardProps };

export const tags: Array<ChipProps> = [
  {
    number: 0,
    label: "TEST 1",
    isSelected: false,
  },
  {
    number: 1,
    label: "TEST 2",
    isSelected: false,
  },
  {
    number: 2,
    label: "TEST 3,4",
    isSelected: false,
  },
  {
    number: 3,
    label: "TEST All",
    isSelected: false,
  },
  {
    number: 4,
    label: "Empty tag",
    isSelected: false,
  },
];

export const selectedData: CardProps = {
  number: 0,
  title: "TEST 1",
  width: "160px",
  height: "160px",
  imgUrl: "/assets/example.svg",
  tags: ["TEST 1", "TEST All"],
};

export const filteredData = [];

export const data: Array<CardProps> = [
  {
    number: 0,
    title: "TEST 1",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 1", "TEST All"],
  },
  {
    number: 1,
    title: "TEST 2",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 2", "TEST All"],
  },
  {
    number: 2,
    title: "TEST 3",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 3,4", "TEST All"],
  },
  {
    number: 3,
    title: "TEST 4",
    width: "160px",
    height: "160px",
    imgUrl: "/assets/example.svg",
    tags: ["TEST 3,4", "TEST All"],
  },
];

function createCustomContext<T>(defaultValue: T) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const context = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function useCustomContext() {
    const customContext = useContext(context);
    if (customContext === undefined) {
      throw new Error("useCtx must be inside a Provider with a value");
    }
    return customContext;
  }

  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <context.Provider value={{ state, update }} {...props} />;
  }
  return [useCustomContext, Provider] as const;
}

export const [useDataContext, DataProvider] = createCustomContext(data);
export const [useTagContext, TagProvider] = createCustomContext(tags);
export const [useSelectedDataContext, SelectedDataProvider] =
  createCustomContext(selectedData);

export function useDataState() {
  const value = useDataContext();
  if (value === undefined) {
    throw new Error("useDataState should be used within DataProvider");
  }
  return value;
}

export function useTagActions() {
  const value = useTagContext();
  const dataContext = useDataContext();

  if (value === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }

  const updateIsSelected = (id: number) => {
    const newValue = JSON.parse(
      JSON.stringify(value.state)
    ) as Array<ChipProps>;
    const tag = newValue.find((item) => item.number == id);
    if (tag) {
      tag.isSelected = !tag.isSelected;
      value.update(newValue);
      const selectedTags = newValue
        .filter((item) => item.isSelected)
        .map((item) => item.label);
      if (selectedTags.length == 0) {
        dataContext.update(data);
      } else {
        dataContext.update(
          data.filter((item) =>
            selectedTags.every((tag) => item.tags.includes(tag))
          )
        );
      }
    } else {
      throw new Error("tag key dosen't exist");
    }
  };

  return { updateIsSelected };
}

export function useTagState() {
  const value = useTagContext();
  if (value === undefined) {
    throw new Error("useTagActions should be used within TagProvider");
  }
  return value.state;
}

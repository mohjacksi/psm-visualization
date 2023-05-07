export interface NodeDataAttribute {
  x: number;
  y: number;
  size: number;
  label: string;
  color: string;
}

// export interface NodeData {
//   key: string;
//   type: string;
//   attributes?: NodeDataAttribute;
// }

export interface NodeData {
  key: string;
  label: string;
  type?: string;
  color: string;
  cluster?: string;
  x: number;
  y: number;
  attributes?: NodeDataAttribute
}

export interface Cluster {
  key: string;
  color: string;
  clusterLabel: string;
}

export interface Tag {
  key: string;
  image: string;
}

export interface Dataset {
  nodes: NodeData[];
  edges: any[];
  clusters: any;
  tags: Tag[];
}

export interface FiltersState {
  clusters: Record<string, boolean>;
  tags?: Record<string, boolean>;
}

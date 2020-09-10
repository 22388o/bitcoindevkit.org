initSidebarItems({"enum":[["Capability","Capabilities that can be supported by an [`OnlineBlockchain`] backend"]],"fn":[["log_progress","Create a nwe instance of [`LogProgress`]"],["noop_progress","Create a new instance of [`NoopProgress`]"],["progress","Shortcut to create a [`channel`] (pair of [`Sender`] and [`Receiver`]) that can transport [`ProgressData`]"]],"mod":[["compact_filters","Compact Filters"],["electrum","Electrum"],["esplora","Esplora"]],"struct":[["LogProgress","Type that implements [`Progress`] and logs at level `INFO` every update received"],["NoopProgress","Type that implements [`Progress`] and drops every update received"],["OfflineBlockchain","Type that only implements [`Blockchain`] and is always offline"]],"trait":[["Blockchain","Base trait for a blockchain backend"],["OnlineBlockchain","Trait that defines the actions that must be supported by an online [`Blockchain`]"],["Progress","Trait for types that can receive and process progress updates during [`OnlineBlockchain::sync`] and [`OnlineBlockchain::setup`]"]],"type":[["ProgressData","Data sent with a progress update over a [`channel`]"]]});
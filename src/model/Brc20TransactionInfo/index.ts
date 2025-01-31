import mongoose from "mongoose";

const Brc20TransactionInfo = new mongoose.Schema({
	poolAddress: { type: String, required: true },
	userAddress: { type: String, required: true },
	txId: { type: String, required: true },
	tokenAmount: { type: Number, required: true },
	btcAmount: { type: Number, required: true },
	swapType: { type: Number, required: true },
	createdAt: { type: Date, default: new Date(new Date().toUTCString()) },
});

const Brc20TransactionInfoModal = mongoose.model("Brc20TransactionInfo", Brc20TransactionInfo);

export default Brc20TransactionInfoModal;

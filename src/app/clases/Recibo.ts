export class Recibo {
	constructor(
        public nroRecibo: number,
		public detalle: string,
		public importe: number,
        public efectivo: boolean,
        public fechaPago: Date
	) {}
}

import { ModalProps } from "../types";

export function Modal (props: ModalProps) {
  return (
    <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark p-3 border-3 rounded">
          <div className="modal-header">
            <h5 className="modal-title">{ props.title }</h5>
          </div>
          <div className="modal-body">
            { props.children }
          </div>
          <div className="modal-footer">
            { props.fnOk && <button type="button" className="btn btn-primary" onClick={props.fnOk}>OK</button> }
            { props.fnClose && <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.fnClose}>Close</button> }
          </div>
        </div>
      </div>
    </div>
  )
}

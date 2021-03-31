import { ReactElement, ChangeEvent } from "react";



interface FieldProps{
    label : string; 
    isArea?: boolean; 
    placeholder: string; 
    onChangeHandler: (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void; 
    type: string; 
    disabled?: boolean; 

}

export default function Field(props:FieldProps): ReactElement | null{

    return  <div className="field">
                        <label className="label">{props.label}</label>
                        <div className="control" >
                            {
                                props.disabled && props.isArea && <textarea className="textarea" disabled/>
                            }
                            {
                                props.disabled && !props.isArea && <input className="input" disabled/>
                            }
                            {
                                !props.disabled && props.isArea && <textarea className="textarea" id={props.label} placeholder={props.placeholder} onChange={(e)=> {props.onChangeHandler(e)}}/>
                            }   
                            {
                                !props.disabled && !props.isArea && <input className="input"  type={props.type} id={props.label} placeholder={props.placeholder} onChange={(e)=> {props.onChangeHandler(e)}}/>
                            }
                        </div>
            </div>
};